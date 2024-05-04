import { crtBlog, getBlogId, uptBlog } from '@/Services/articles';
import { categories } from '@/shared/constant/categories';
import { useFetchData } from '@/shared/hooks/useFetchData';
import { AddIcon } from '@chakra-ui/icons';
import { 
    Box, 
    Button, 
    Divider, 
    FormControl, 
    FormHelperText, 
    FormLabel, 
    Image, 
    Input, 
    Select, 
    Text, 
    Textarea, 
    useToast 
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import dynamic from 'next/dynamic';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useMemo, useState } from 'react'
const Header = dynamic(()=>import('@/shared/components/Header'),{ssr:false})


const defaultImg =
  "https://www.fivebranches.edu/wp-content/uploads/2021/08/default-image.jpg";

const initialValues = {
  title: "",
  desc: "",
  cover_url: "",
  images: ["", ""],
  category: null,
  time: Date.now(),
};

function Create() {
    const par = useSearchParams();
    console.log(par.get("blog_id"));
    const blogId = useMemo(() => par && par.get("blog_id"), [par]);
  
    const [loading, setLoading] = useState(false);
  
    const {push} = useRouter()
    const toast = useToast();
  
    const handleEditBlog = useCallback(
      async (data, { resetForm }) => {
        console.log("data", data);
        setLoading(true);
  
        try {
          if (blogId) {
            await uptBlog(blogId, data);
            push("/setting");
          } else {
            await crtBlog(data);
            push("/articles");
          }
  
          resetForm();
  
          toast({
            title: blogId ? "Blog updated." : "Blog created.",
            status: "success",
            colorScheme: "teal",
            duration: 2000,
            isClosable: true,
          });
        } catch (err) {
          toast({
            title: err?.message,
            status: "error",
            colorScheme: "red",
            duration: 2000,
            isClosable: true,
          });
        } finally {
          setLoading(false);
        }
      },
      [blogId, push, toast]
    );
  
    const { values, handleChange, errors, handleSubmit, setValues } = useFormik({
      initialValues,
      onSubmit: handleEditBlog,
      validate: (form) => {
        let error = {};
  
        if (!form?.cover_url?.trim()) {
          error.cover_url = "Required field cover!";
        }
  
        
  
        if (!form?.title?.trim()) {
          error.title = "Required field title!";
        }
  
        if (!form?.desc?.trim()) {
          error.desc = "Required field description!";
        }
  
        return error;
      },
    });
  
    useFetchData({
      condition: !blogId,
      requestFn: () => getBlogId(blogId),
      dependecy: [blogId],
      onSuccess: (data) => {
        const { title, desc, cover_url, category, images } = data;
        setValues({ title, desc, cover_url, category, images, time: Date.now() });
      },
    });
  
    console.log("values", values);
  
    useEffect(() => {
      if (!blogId) return;
  
      setValues({
        title: "",
        desc: "",
        cover_url: "",
        category: null,
        time: Date.now(),
      });
    }, [blogId]);
  
    const handleImageInput = useCallback(
      (value, index) => {
        const newValues = { ...values };
  
        newValues.images[index] = value;
  
        setValues(newValues);
      },
      [values]
    );
  
    return (
      <>
        <Header />
        <Box py={100} px={250}>
          <Text fontSize="6xl" align="center" fontWeight={600}>
            {blogId ? "Update" : "Create"} Your Blog
          </Text>
          <Divider />
  
          <Box display="flex" flexDirection="column" my={10} gap={6}>
            <Image
              alt='#'
              width={200}
              height={200}
              objectFit="cover"
              borderRadius={10}
              src={values.cover_url ? values.cover_url : defaultImg}
            />
            <FormControl>
              <FormLabel>Cover Url</FormLabel>
              <Input
                name="cover_url"
                value={values.cover_url}
                onChange={handleChange}
              />
              {errors?.cover_url && (
                <FormHelperText color="red">{errors?.cover_url}</FormHelperText>
              )}
            </FormControl>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input name="title" value={values.title} onChange={handleChange} />
              {errors?.title && (
                <FormHelperText color="red">{errors?.title}</FormHelperText>
              )}
            </FormControl>
  
            <FormControl>
              <FormLabel>Description</FormLabel>
              <Textarea name="desc" value={values.desc} onChange={handleChange} />
              {errors?.desc && (
                <FormHelperText color="red">{errors?.desc}</FormHelperText>
              )}
            </FormControl>
  
            <FormControl>
              <FormLabel>Category</FormLabel>
              <Select name="category" onChange={handleChange}>
                <option selected>Select category</option>
                {categories?.map((item) => (
                  <option key={item.id} selected={item.id == values.category} value={item.id}>
                    {item.title}
                  </option>
                ))}
              </Select>
            </FormControl>
  
            <Divider />
            {values?.images?.map((image, index) => (
              <Box key={"index" + index} py={5}>
                <Image
                    alt='#'
                  width={50}
                  height={50}
                  objectFit="cover"
                  borderRadius={10}
                  mb={4}
                  src={image ? image : defaultImg}
                />
                <FormControl>
                  <Input
                    value={image}
                    onChange={(e) => handleImageInput(e.target.value, index)}
                    placeholder={"Image " + (index + 1)}
                  />
                </FormControl>
              </Box>
            ))}
            <Button
              colorScheme="red"
              alignSelf="flex-start"
              leftIcon={<AddIcon />}
              onClick={() =>
                setValues((prev) => ({ ...prev, images: [...prev.images, ""] }))
              }
            >
              Add
            </Button>
  
            <Divider />
            <Button
              colorScheme="teal"
              my={10}
              onClick={handleSubmit}
              disabled={loading}
              isLoading={loading}
            >
              {blogId ? "Update" : "Create"} blog
            </Button>
          </Box>
  
          <Divider />
        </Box>
      </>
)}

export default Create