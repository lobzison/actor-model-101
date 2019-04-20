package untyped

import akka.actor._
import untyped.Utils._
import UserNode._
import akka.actor.SupervisorStrategy.Restart
import untyped.QueryExecutor._

import scala.language.postfixOps
import scala.concurrent.duration._


object UserNode{
  case class Query(query: String)

  case class QueryResult(result: String)
  case object InvalidQuery
  case object Timeout
}

class UserNode extends Actor {
  import context.dispatcher

  var notExecuted: Map[Long, (ActorRef, ActorRef)] = Map.empty

  override def receive: Receive = {
    case Query(query) =>
      validate(query) match {
        case Some(s) =>
          val executor =
            context
            .system
            .actorOf(Props[QueryExecutor])
          val id = nextSeq
          notExecuted += id -> ((executor, sender))
          scheduleQueryTimeout(id)
          executor ! QueryRequest(id, s)
        case None => sender ! InvalidQuery
      }
    case QueryReply(id, r) =>
      notExecuted get id foreach {
          case (executor, sender) =>
            executor ! PoisonPill
            sender ! QueryResult(r)
        }
      notExecuted -= id
  }

  def scheduleQueryTimeout(id: Long): Unit = {
    context.system.scheduler.scheduleOnce(1 second){
      notExecuted get id foreach {
        case (executor, sender) =>
        notExecuted -= id
        executor ! PoisonPill
        sender ! Timeout
      }
    }
  }

  override def supervisorStrategy: SupervisorStrategy =
    OneForOneStrategy(5, 1 second){
      case _: Exception =>
        Restart
    }

  var _idCounter = 0L
  def nextSeq(): Long = {
    val ret = _idCounter
    _idCounter += 1
    ret
  }

}
