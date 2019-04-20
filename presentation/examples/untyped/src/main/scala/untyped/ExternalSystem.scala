package untyped

import scala.util.Random

class ExternalSystem(connection: String){
  def openConnection():Unit = ()
  def executeQuery(query: String): String =
    if (Random.nextBoolean()) s"Result of the query $query"
    else throw new RuntimeException("Service unavailable")
  def closeConnection():Unit = ()
}
  object ExternalSystem {
    def apply(connection: String): ExternalSystem = new ExternalSystem(connection)
  }

