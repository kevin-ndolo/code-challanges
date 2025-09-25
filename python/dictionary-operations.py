# Create a student grade management system using dictionaries:
#   Add students and their grades
#   Calculate class average
#   Find students above/below average
#   Handle multiple subjects per student



# students data
students = {
  "Jane":    {"Maths": 49, "English": 92, "CRE": 84},
  "Robert":  {"Maths": 65, "English": 68, "CRE": 80},
  "Steve":   {"Maths": 78, "English": 88, "CRE": 92}
}


#   Add students and their grades
def add_student(students, name, grades):
  students[name] = grades

add_student(students, "kevin", {"Maths": 70, "English": 80, "CRE": 90})
print(students)
print(f"kevin: {students["kevin"]}")


#   Calculate class average
def cal