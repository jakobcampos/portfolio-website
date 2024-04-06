import classNames from "classnames";

export const Container = ({ 
  children, 
  className }:{ 
    children: React.ReactNode; 
    className?: string 
  }) => {
  return(
    <div className={classNames("overflow-hidden relative border-b-[.1rem]", className)}>  
        {children} 
    </div>
    );
};


