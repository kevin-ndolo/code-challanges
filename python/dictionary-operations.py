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
print(f"kevin: {students["kevin"]}")


#   Calculate class average
def calculate_class_average():
  subjects = 0
  total_score = 0

  for student, scores in students.items():
    for subject, score in scores.items():
      subjects += 1
      total_score += score

     # avoid divide-by-zero if there are no students/subjects
  if subjects == 0:
    return 0     
 

  return  total_score / subjects
  


print("Class average:", calculate_class_average())





#   Find students above/below average
#   Handle multiple subjects per student

def analyze_student_performance():
    overall_class_avg = calculate_class_average()
    results = {}

    for student_name, scores_dict in students.items():
        scores = scores_dict.values()
        student_avg = sum(scores) / len(scores) if scores else 0

        if student_avg > overall_class_avg:
            status = "Above Class Average"
        elif student_avg < overall_class_avg:
            status = "Below Class Average"
        else:
            status = "Equal to Class Average"

        results[student_name] = {
            "Average": round(student_avg, 2),
            "Status": status
        }

    return results


print(analyze_student_performance())
