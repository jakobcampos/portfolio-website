import classNames from "classnames";

export const Container = ({ 
  children, 
  className }:{ 
    children: React.ReactNode; 
    className?: string 
  }) => {
  return(
    <div className={classNames("mx-auto pt-[var(--navigation-height)]", className)}> 
        {children} 
    </div>
    );
};


