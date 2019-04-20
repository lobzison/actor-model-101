import akka.actor.{Actor, ActorSystem, Props}
import akka.event.LoggingReceive
import untyped.UserNode
import untyped.UserNode.Query


object Main extends App{
  val system = ActorSystem("untyped")
  // default Actor constructor
  val node = system.actorOf(Props[UserNode], name = "userNode")
  val user = system.actorOf(Props[User], name = "user")


  class User extends Actor {
    node ! Query("valid query")
    node ! Query("valid query")
    node ! Query("valid query")
    node ! Query("invalid query")

    override def receive: Receive = LoggingReceive {
      case x => println(x)
    }
  }
}
