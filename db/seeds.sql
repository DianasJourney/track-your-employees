-- inserting values as placeholders
INSERT INTO department
  (name)
VALUES
  ('Engineering'),
  ('Sales'),
  ('Finance'),
  ('Baker');

INSERT INTO role
  (title, salary, department_id)
VALUES
  ('Software Engineer', 95200, 1),
  ('Salesperson', 50000, 2),
  ('Accountant', 165678, 3),
  ('Pastry Chef', 723555, 4);

INSERT INTO employee
  (first_name, last_name, role_id, manager_id)
VALUES
  ('Eric', 'Xia', 1, 2),
  ('Billy', 'Nguy', 2, 8),
  ('Steven', 'Vu', 3, 1),
  ('Hui', 'Cong', 4, 9);