# How do Pick and Omit utility types prevent code duplication while creating specialized "slices" of a master interface? Discuss how this keeps your code DRY (Don't Repeat Yourself).

## Introduction

`Pick` and `Omit` utility types help prevent code duplication while creating specialized slices from a master type or interface. This keeps the code DRY (Don't Repeat Yourself) because we don't need to write the same properties multiple times.

---

## Example

```ts
type persion = {
  id: number
  name: string
  email: string
  password: string
  createdAt: Date
}
```

Here I take a type and if I want to create one more type and those types already have fields in the `persion` type. Like:

```ts
type student = {
    id: number;
    name: string;
    password: string;
}
```

The `student` type has the same fields that already exist in the `persion` type. So this is duplicate code.

I want to avoid this duplicate. That's why we can use `Pick` for avoiding duplication.

Like:

```ts
type student = Pick<persion, 'id' | 'name' | 'password'>
```

### Result

```ts
type student = {
    id: number;
    name: string;
    password: string;
}
```

---

## Using `Omit`

And `Omit` does the opposite. Omit er vitor jei field name dibo oi field bade baki field gulo nibe.

Now I am showing this with an example.

```ts
type student = Omit<persion, 'id' | 'name' | 'password'>
```

### Result

```ts
type student = {
    email: string
    createdAt: Date
}
```

---

## Conclusion

`Pick` helps take only specific fields from a master type, and `Omit` removes specific fields and keeps the rest. Using these utility types helps avoid duplicate code and keeps the code DRY (Don't Repeat Yourself).