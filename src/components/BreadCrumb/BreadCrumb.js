import '../../styles/BreadCrumb.scss';

const BreadCrumb = ({ route }) => {
  return (
    <nav>
      <ol class="breadcrumb">
        {route.map((key) => (
          <li key={key} class="breadcrumb-item" aria-current="page">
            {key}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default BreadCrumb;
