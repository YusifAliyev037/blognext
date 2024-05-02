import { getBlogs } from '@/Services/articles'
import { Box, SimpleGrid } from '@chakra-ui/react'
import dynamic from 'next/dynamic'


const Searchbox = dynamic(()=>import('@/shared/components/SearchBox/searchbox'),{ssr:false})
const Header = dynamic(()=>import('@/shared/components/Header'),{ssr:false})
const BlogCard = dynamic(()=>import('@/shared/components/BlogCard'),{ssr:false})
const Breadcrumbs = dynamic(()=>import('@/shared/components/Breadcrumb'),{ssr:false})

function Article({data}) {
    console.log(data);

   

  return (
    <>
    <Header />
      <Box as='section' px={50}>
      <Breadcrumbs/>
     <Searchbox
    //   onFocus={()=>setSearchData(data)}
    //    onSearch={handleSearch} 
       />
      </Box>
     
      <SimpleGrid columns={{sm: 2}} p="20" spacing="10">
        {data
        ?.filter((item) => item.id > 100)
        ?.map((item)=>(
        <BlogCard key={"blog-id" + item.id} {...item} onReadMore={()=>navigate("/articles/" + item.id)} 
        />
        ))}
   
      </SimpleGrid>
      
    </>
  )
}

export default Article



export async function getServerSideProps(context){
    try{
        const res = await getBlogs()
        console.log(res);

        return{
            props:{
               data:res.data 
            }
        }

    }catch(err){
       return{
        redirect:"/404"
       }
    }
}