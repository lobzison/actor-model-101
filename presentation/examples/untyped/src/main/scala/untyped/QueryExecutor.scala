package untyped

import akka.actor._
import untyped.QueryExecutor._

object QueryExecutor {
  case class QueryRequest(id: Long, q: String)
  case class QueryReply(id: Long, r: String)
}
class QueryExecutor extends Actor {
  val es = ExternalSystem("DBMQKAFKAWHATEWER")
  es.openConnection()

  override def receive: Receive = {
    case QueryRequest(id, q) =>
      val results = es.executeQuery(q)
      sender ! QueryReply(id, results)
  }

  override def preRestart(reason: Throwable, message: Option[Any]): Unit = {
    message foreach (self ! _)
    es.closeConnection()
  }

  override def postStop() = {
    es.closeConnection()
    super.postStop()
  }
}
