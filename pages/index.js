import Image from "next/image";
import MetaSeo from "@/shared/components/MetaSeo/MetaSeo";
import { Box, Text,Button,SimpleGrid } from "@chakra-ui/react"
import { useRouter } from "next/router";
import { ROUTER } from "@/shared/constant/router";
import dynamic from "next/dynamic";

const Header = dynamic(()=>import('@/shared/components/Header'),{ssr:false})


export default function Home() {
  const {push} = useRouter()
  
  return (
    <>
    <Header/>
    
      <MetaSeo title="Home" desc={"Lorem"}/>
    <SimpleGrid bg="gray.50" columns={{sm:2}} spacing="2" p="10" >

<Box as="main" display="flex" flexDirection="column" justifyContent="flex-start" gap="16px">
<Text
  as="h1"
  bgGradient="linear(to-l, #7928CA, #FF0080)"
  bgClip="text"
  fontSize="6xl"
  fontWeight="extrabold"
>
         Welcome to Articles Devil  
</Text>
<Text
  bgClip="text"
  fontSize="2xl"
  fontWeight="medium"
  color="black"
  as="p"
>
      Lorem ipsum dolor sit
       amet consectetur adipisicing elit. Quam dolores
        provident assumenda ex quo cupiditate voluptatum
        , facere beatae obcaecati eius? Natus facilis officia
         exercitationem quas rerum hic culpa aspernatur esse.
</Text>
 <Button size="lg"  alignSelf="flex-start" colorScheme='teal' onClick={()=>push(ROUTER.ARTICLES_CREATE)}>Get Started</Button>
</Box>
<Box>
  <Image className=" w-full" alt="#" width={300}  height={300} src='https://cdni.iconscout.com/illustration/premium/thumb/blog-writer-working-on-article-5691583-4759515.png'></Image>
</Box>
</SimpleGrid>
    
    </>
  );
}
