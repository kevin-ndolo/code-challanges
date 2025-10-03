resource "aws_db_instance" "web_db" {
  identifier         = "web-db"
  engine             = "mysql"
  instance_class     = "db.t3.micro"
  allocated_storage  = 20
  username           = "admin"
  password           = var.db_password
  skip_final_snapshot = true
  publicly_accessible = false
  vpc_security_group_ids = [aws_security_group.web_sg.id]
  db_subnet_group_name   = aws_db_subnet_group.web_subnet.name
}

resource "aws_db_subnet_group" "web_subnet" {
  name       = "web-db-subnet"
  subnet_ids = [aws_subnet.private.id]
}
