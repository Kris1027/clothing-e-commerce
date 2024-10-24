import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
   return (
      <Link href="/">
         <Image src="/logo_1.webp" alt="logo" width={300} height={200} />
      </Link>
   );
};

export default Logo;
