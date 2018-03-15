import React from "react";
import Link from "gatsby-link";
import H1 from "../components/H1";
import styled from "styled-components";
import Card from '../components/Card';

const ProjectsPage = () => (
  <div>
    <H1>Projects</H1>
  </div>
);

export default ({ data }) => <div>
    <Card title="Koirakuva" imageUrl="https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_960_720.jpg" text="eka koira"/>
    <Card title="Toinen koirakuva" imageUrl="https://cdn.pixabay.com/photo/2018/03/05/00/56/dog-3199733_960_720.jpg" text="toka koira"/>
</div>;