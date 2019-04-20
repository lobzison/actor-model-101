package untyped

object Utils {
  def validate(s: String): Option[String] = if (s.contains("invalid")) None else Some(s)
}
