resource "aws_launch_template" "web" {
  name_prefix   = "web-template"
  image_id      = "ami-0c55b159cbfafe1f0"  # Amazon Linux 2
  instance_type = var.instance_type
  vpc_security_group_ids = [aws_security_group.web_sg.id]
}

resource "aws_autoscaling_group" "web_asg" {
  desired_capacity     = 2
  max_size             = 3
  min_size             = 1
  launch_template {
    id      = aws_launch_template.web.id
    version = "$Latest"
  }
  vpc_zone_identifier = [aws_subnet.public.id]
}
