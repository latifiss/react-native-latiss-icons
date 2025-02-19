import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";

const Synchronize = (
  { width = 48, height = 48, color = "#000", ...props }: SvgProps & { color?: string },
  ref: Ref<Svg>
) => (
  <Svg
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 48 48"
    ref={ref}
    {...props}
  >
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M22.771 3.613c1.285-.134 2.434.735 2.424 2.027a9.878 9.878 0 0 1-.5 2.995c-.33 1.006-1.312 1.593-2.354 1.785a14.285 14.285 0 0 0-9.813 6.923c-3.102 5.372-2.326 11.919 1.459 16.4.859-.662 1.601-1.2 2.233-1.638 1.374-.951 3.014-.063 2.99 1.608-.037 2.614-.34 5.455-.67 7.837a2.876 2.876 0 0 1-2.958 2.482c-2.422-.088-5.298-.286-7.895-.71-1.63-.267-2.215-2.001-1.054-3.177a54.568 54.568 0 0 1 2.225-2.118C3.328 31.456 2.2 21.87 6.742 14.003c3.5-6.06 9.563-9.717 16.03-10.39ZM27.091 45.386c-1.285.134-2.434-.734-2.423-2.026.007-.83.127-1.855.5-2.995.33-1.007 1.312-1.593 2.353-1.785a14.285 14.285 0 0 0 9.814-6.923c3.102-5.373 2.326-11.92-1.459-16.4a54.93 54.93 0 0 1-2.233 1.638c-1.374.95-3.014.062-2.99-1.609.037-2.614.339-5.455.67-7.837a2.876 2.876 0 0 1 2.957-2.481c2.423.088 5.3.286 7.896.71 1.63.266 2.215 2 1.054 3.176a54.605 54.605 0 0 1-2.225 2.119c5.53 6.57 6.658 16.156 2.115 24.024-3.499 6.06-9.563 9.717-16.028 10.39Z"
    />
  </Svg>
);

const ForwardRef = forwardRef(Synchronize);
export default ForwardRef;
