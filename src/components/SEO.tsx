import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
}

const SEO = ({ 
  title = 'Cauan Amorim Gomes - Desenvolvedor Full Stack',
  description = 'Portfólio profissional de Cauan Amorim Gomes, desenvolvedor Full Stack especializado em React, TypeScript, Node.js e muito mais.'
}: SEOProps) => {
  useEffect(() => {
    document.title = title;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }
  }, [title, description]);

  return null;
};

export default SEO;
