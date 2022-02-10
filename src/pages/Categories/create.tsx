import { Button, Flex, FormControl, Input, Text } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useCallback } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

interface ICategory {
  name: string;
}

const categoryValidation = yup.object().shape({
  name: yup.string().required("O nome da categoria é obrigatorio"),
});

export function CreateCategoryPage() {
  const { register, formState, handleSubmit } = useForm({
    resolver: yupResolver(categoryValidation),
    defaultValues: {
      name: "",
    },
  });

  const navigate = useNavigate();

  const { errors } = formState;

  const handleCreateCategory: SubmitHandler<ICategory> = useCallback(
    async (formValue) => {
      api
        .post("/categories", {
          name: formValue.name,
        })
        .then((response) => {
          alert("Categoria cadastrada com sucesso!");
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    [navigate]
  );

  return (
    <Flex flexDirection="column" paddingY="5">
      <Text>Cadastrando categoria</Text>

      <Flex as="form" onSubmit={handleSubmit(handleCreateCategory)}>
        <FormControl>
          <Input {...register("name")} />
          {errors.name && <Text color="red">{errors.name.message}</Text>}
        </FormControl>
        <Button type="submit">Cadastrar</Button>
      </Flex>
    </Flex>
  );
}
