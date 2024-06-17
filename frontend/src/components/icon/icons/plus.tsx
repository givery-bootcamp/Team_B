import type { IconProps } from "./icon-props";
import { Svg } from "./svg";

export const Plus = ({ size, color }: IconProps) => {
	return (
		<Svg size={size} color={color}>
			<g clip-path="url(#clip0_108_108)">
				<path d="M13.3313 8.31265H11.1052C10.8745 8.31265 10.6875 8.12551 10.6875 7.89487V5.66861C10.6875 5.43797 10.5005 5.25098 10.2697 5.25098H8.73023C8.49952 5.25098 8.31245 5.43797 8.31245 5.66861V7.89487C8.31245 8.12551 8.12546 8.31265 7.89475 8.31265H5.66863C5.43785 8.31265 5.25085 8.49964 5.25085 8.73043V10.2699C5.25085 10.5005 5.43785 10.6876 5.66863 10.6876H7.89475C8.12546 10.6876 8.31245 10.8746 8.31245 11.1054V13.3314C8.31245 13.5622 8.49952 13.7492 8.73023 13.7492H10.2697C10.5005 13.7492 10.6875 13.5622 10.6875 13.3314V11.1054C10.6875 10.8746 10.8745 10.6876 11.1052 10.6876H13.3313C13.5621 10.6876 13.7491 10.5005 13.7491 10.2699V8.73043C13.7491 8.49964 13.5621 8.31265 13.3313 8.31265Z" />
				<path d="M9.5 0C4.25322 0 0 4.25337 0 9.5C0 14.7468 4.25322 19 9.5 19C14.7466 19 19 14.7468 19 9.5C19 4.25337 14.7466 0 9.5 0ZM9.5 16.625C5.57119 16.625 2.375 13.4288 2.375 9.5C2.375 5.57134 5.57119 2.375 9.5 2.375C13.4287 2.375 16.625 5.57134 16.625 9.5C16.625 13.4288 13.4287 16.625 9.5 16.625Z" />
			</g>
			<defs>
				<clipPath id="clip0_108_108">
					<rect width="19" height="19" fill="white" />
				</clipPath>
			</defs>
		</Svg>
	);
};