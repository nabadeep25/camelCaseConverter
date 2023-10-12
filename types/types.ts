type ObjectType=Record<string, any>
type ArrayType=string[]| ObjectType[]
type ToCamelCaseType = string | ArrayType | ObjectType;
export type {
   ToCamelCaseType,ObjectType,ArrayType
}