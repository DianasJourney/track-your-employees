-- inserting values as placeholders
INSERT INTO department
  (name)
VALUES
  ('Engineering'),
  ('Sales'),
  ('Finance'),
  ('Legal');


INSERT INTO role
  (title, salary, department_id)
VALUES
  ('Software Engineer', 95200, 1),
  ('Salesperson', 50000, 2),
  ('Accountant', 165678, 3),
  ('Lawyer', 723555, 4);

INSERT INTO employee
  (first_name, last_name, role_id, manager_id)
VALUES
  ('Eric', 'Xia', 1, 1),
  ('Billy', 'Nguy', 2, 1),
  ('Steven', 'Vu', 3, 2),
  ('Hui', 'Cong', 4, 2);