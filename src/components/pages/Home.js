import React from "react";
import { useQuery, gql } from "@apollo/client";
import Card from "../Card";

const FETCH_POSTS_QUERY = gql`
  query GetPosts {
    getPosts {
      id
      body
      createdAt
      username
      likeCount
      likes {
        username
      }
      commentCount
      comments {
        id
        username
        createdAt
        body
      }
    }
  }
`;

const Home = () => {
  const { loading, error, data } = useQuery(FETCH_POSTS_QUERY);

  if (loading) return <h4>Loading...</h4>;
  if (error) console.log(error);
  console.log(data);
  return (
    <section class=" text-gray-200 bg-gray-900">
      <div class="max-w-6xl mx-auto px-5 py-24 ">
        <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 class=" title-font mb-2 text-4xl font-extrabold leading-10 tracking-tight text-left sm:text-5xl sm:leading-none md:text-6xl">
            {" "}
            DERNIER COURS
          </h1>
          <p class="lg:w-1/2 w-full leading-relaxed text-base">
            Enseigner c'est apprendre deux fois. J'aime partager mes
            connaissances et mes découvertses.
          </p>
        </div>
        <div class="flex flex-wrap -m-4">
          {data.getPosts.map((post) => {
            return <Card post={post} key={post._id} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Home;
