import {
  Button,
  Flex,
  FormControl,
  Input,
  Select,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { api } from "../../services/api";

interface ICategory {
  id: string;
  name: string;
}

interface IProduct {
  name: string;
  description: string;
  cover: string;
  value: number;
  category_id: string;
}

export function CreateProductPage() {
  const { register, formState, handleSubmit, control } = useForm({
    defaultValues: {
      name: "",
      description: "",
      cover: "",
      value: 0,
      category_id: "",
    },
  });

  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    api
      .get("/categories")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleCreateProduct: SubmitHandler<IProduct> = useCallback(
    async (formValue) => {
      await api
        .post("/products", {
          name: formValue.name,
          cover: formValue.cover,
          description: formValue.description,
          value: formValue.value,
          category_id: formValue.category_id,
        })
        .then((response) => {
          alert("Produto cadastrado com sucesso!");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    []
  );

  return (
    <Flex flexDirection="column" padding={5}>
      <Text>Cadastrando produto</Text>
      <Flex
        as="form"
        flexDirection="column"
        marginTop={4}
        onSubmit={handleSubmit(handleCreateProduct)}>
        <FormControl>
          <Text>Nome</Text>
          <Input {...register("name")} />
        </FormControl>
        <FormControl>
          <Text>Descrição</Text>

          <Input {...register("description")} />
        </FormControl>

        <SimpleGrid columns={{ base: 1, sm: 2, md: 2 }} spacingX={3}>
          <FormControl>
            <Text>Link da Imagem</Text>

            <Input {...register("cover")} />
          </FormControl>
          <FormControl>
            <Text>Valor</Text>

            <Input {...register("value")} type="number" />
          </FormControl>
        </SimpleGrid>

        <FormControl>
          <Text>Categoria</Text>
          <Controller
            control={control}
            name="category_id"
            render={({ field }) => (
              <Select {...field}>
                <option value=""> Selecione um categoria</option>
                {categories.map((category) => (
                  <option value={category.id}>{category.name}</option>
                ))}
              </Select>
            )}
          />
        </FormControl>
        <SimpleGrid columns={{ base: 1, sm: 2 }} spacingX={4}>
          <Link to="/">
            <Button marginTop={4}>Voltar</Button>
          </Link>
          <Button marginTop={4} type="submit">
            Cadastrar
          </Button>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
