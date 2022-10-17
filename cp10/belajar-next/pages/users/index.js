import axios from "axios";
import { useRouter } from "next/router";

const Users = (props) => {
  const router = useRouter();
  const currentPage = router.query.start || 0;

  const onClickNext = (start, limit) => {
    router.push({
      pathname: router.pathname,
      query: { start, limit },
    });
  };

  return (
    <div>
      <div>
        {props.usersList.map((user) => (
          <div key={user.id}>{user.name}</div>
        ))}
      </div>
      <div>
        <button
          onClick={() => {
            onClickNext(parseInt(currentPage) + 2, 2);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Users;

export async function getServerSideProps(context) {
  const usersList = await axios
    .get(
      `https://jsonplaceholder.typicode.com/users?_start=${
        context?.query?.start || 0
      }&_limit=${context?.query?.limit || 2}`
    )
    .then((res) => {
      console.log(res.config.url);
      return res.data;
    })
    .catch((err) => []);

  return {
    props: {
      usersList,
      page: 1,
    }, // will be passed to the page component as props
  };
}
