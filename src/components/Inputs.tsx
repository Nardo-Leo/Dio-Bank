import { FormControl, FormLabel, Input } from "@chakra-ui/react"

interface IInput {
    place: string,
    textLabel:string,
    type:string

}

export const Inputs = ({textLabel, place, type}:IInput)=> {
    return(
        <>
          <FormControl>
            <FormLabel fontSize={20}>{textLabel}</FormLabel>
            <Input fontSize={15} placeholder={place} type={type} ></Input>
          </FormControl>
        </>
    )
}