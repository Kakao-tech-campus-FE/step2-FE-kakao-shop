import {ListItem} from "../atoms/ListItems";

export const TopNavListItem = ({link, children, id}) => {
    return (
        <ListItem link={link} id={id}>
            <span
                className="py-4 mx-4 inline-block border-b-transparent hover:border-b-amber-300 border-b-4 ">
                {children}
            </span>
        </ListItem>
    )
}