

import Header from "../components/Header";



export default function DynamicLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
             <Header />
            {children}
        </div>    
        
    );
}
