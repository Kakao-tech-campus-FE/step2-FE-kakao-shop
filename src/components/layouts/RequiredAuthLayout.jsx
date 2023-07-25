import { useEffect } from 'react';

const RequiredAuthLayout = ({ children }) => {
    const { user } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!user) {
        router.push('/login');
        }
    }, [user]);

    return (
        <>
        {children}
        </>
    );
}