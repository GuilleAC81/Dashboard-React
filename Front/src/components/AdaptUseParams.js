import { useParams } from 'react-router-dom';
  
  const AdaptUseParams = Component => props => {
    const params = useParams();  
    return (
      <Component
        {...props}
        {...{  params }}
      />
    );
  };
  
  export default AdaptUseParams;