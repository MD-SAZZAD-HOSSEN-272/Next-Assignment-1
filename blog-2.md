2: How do Pick and Omit utility types prevent code duplication while creating specialized "slices" of a master interface? Discuss how this keeps your code DRY (Don't Repeat Yourself).


type persion {
  id: number
  name: string
  email: string
  password: string
  createdAt: Date
}

here i take a type and if i want create one more type and those type have in the persion type. like

type student = {
    id: number;
    name: string;
    password: string;
}

the student type have same type that have in the persion type. and if duplicate. i want to avoite this duplicate. that's why we can use pick method for avoid the duplicate. like: 

type student = Pick<persion, 'id' | 'name' | 'password'>

* result will be 

type student = {
    id: number;
    name: string;
    password: string;
}




and the Omit do take jeta field tumi niba omit er vior oi field name bade baki j field gulo thakbe se gulo nibe . now ami showing this with example.


type student = Omit<persion, 'id' | 'name' | 'password'>

* result will be 

type student = {
    email: string
    createdAt: Date
}

