import { useEffect, useState } from 'react';
import { useEnv } from '../../../contexts';
import { EnvVar } from '../../../utils';
import { Menu } from '../../../models/Menu';

export const useMenu = () => {
    const env = useEnv();
    const apiUrl = env.get(EnvVar.API_URL);
  
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [error, setError] = useState<unknown>();
    const [menu, setMenu] = useState<Array<Menu>>([]);
    
    useEffect(() => {
      const fetchMenuItems = async () => {
        try {
          setIsLoading(true);
          const response = await fetch(`${apiUrl}/menu-items`);
  
          if (!response.ok) {
            const message = `Error: ${response.status}`;
            throw new Error(message);
          }
  
          const menuItems = await response.json();
          setMenu(menuItems);
          setIsLoading(false);
        } catch (error) {
          setIsError(true);
          setError(error);
          setIsLoading(false);
        }
      };
  
      fetchMenuItems();
    }, [apiUrl]);
    return { isLoading, isError, error, menu };
  };