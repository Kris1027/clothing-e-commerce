import Image from 'next/image';

const Logo = () => {
   return (
      <div>
         <Image src="/logo_1.webp" alt="logo" width={300} height={200} />
      </div>
   );
};

export default Logo;
