import { getBlogs } from '@/Services/articles'
import { Box, SimpleGrid } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'


const Searchbox = dynamic(()=>import('@/shared/components/SearchBox/searchbox'),{ssr:false})
const Header = dynamic(()=>import('@/shared/components/Header'),{ssr:false})
const BlogCard = dynamic(()=>import('@/shared/components/BlogCard'),{ssr:false})
const Breadcrumbs = dynamic(()=>import('@/shared/components/Breadcrumb'),{ssr:false})

function Article({data}) {
  const {push} = useRouter()
  const [searchData, setSearchData] = useState()
  useEffect(()=>{

    setSearchData(data);
  },[data])

  const handleSearch = (text) =>{

    if(!text.trim()){
      setSearchData(data);
      return
    }
    const filterData = searchData.filter((item)=>
    new RegExp(text, "i").test(item.title)
  );

  setSearchData(filterData)
    console.log("filterData", filterData);
  }

  return (
    <>
    <Head>
      <title>Home</title>
    </Head>
    <Header />
      <Box as='section' px={50}>
      <Breadcrumbs/>
     <Searchbox
      onFocus={()=>setSearchData(data)}
       onSearch={handleSearch} 
       />
      </Box>
     
      <SimpleGrid columns={{sm: 2}} p="20" spacing="10">
        {searchData
        ?.filter((item) => item.id > 100)
        ?.map((item)=>(
        <BlogCard key={"blog-id" + item.id} {...item} onReadMore={()=>push("/articles/detail/" + item.id)} 
        />
        ))}
   
      </SimpleGrid>
      
    </>
  )
}

export default Article



export async function getServerSideProps(context) {
  try {
    const res = await getBlogs();

    return {
      props: {
        data: res.data,
      },
    };
  } catch (err) {
    return {
      redirect: "/404",
    };
  }
}