import { selFavorites } from '@/redux/global/globalSlice'
import { Box, SimpleGrid } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import React from 'react'
import { useSelector } from 'react-redux'
const BlogCard = dynamic(()=>import('@/shared/components/BlogCard'),{ssr:false})
const Breadcrumbs = dynamic(()=>import('@/shared/components/Breadcrumb'),{ssr:false})
const Header = dynamic(()=>import('@/shared/components/Header'),{ssr:false})


function Favorites() {
  const favorites = useSelector(selFavorites)
  return (
    <Box>
      <Head>
        <title>Favorites</title>
      </Head>
      <Header />
      <Box  px={50}>
      <Breadcrumbs routes={["Favorites"]}/>
      </Box>
     
      <SimpleGrid columns={{sm: 2}} p="20" spacing="10">
        {favorites
        ?.filter((item) => item.id > 100)
        ?.map((item)=>(
        <BlogCard key={"blog-id" + item.id} {...item} onReadMore={()=>navigate("/articles/" + item.id)} 
        />
        ))}
   
      </SimpleGrid>
    </Box>
  )
}

export default Favorites