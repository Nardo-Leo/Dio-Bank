import {Input  } from "@chakra-ui/react"

export const Label = ({name, htmlFor,placeholder, id, type, onChange}:any) => {
    return(
        <div>
            <label htmlFor={htmlFor}>{name}</label>
            <Input placeholder={placeholder} id={htmlFor} type={type} onChange={onChange}></Input>
        </div>
    )
}