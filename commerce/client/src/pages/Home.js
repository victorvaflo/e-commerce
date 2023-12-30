import React from "react";
import { Layout, Typography, Card } from 'antd';
import Jumbotron from "../components/cards/Jumbotron";
import NewArrivals from "../components/home/NewArrivals";
import BestSellers from "../components/home/BestSellers";
import CategoryList from "../components/category/CategoryList";
import SubList from "../components/sub/SubList";
import 'bootstrap/dist/css/bootstrap.min.css';

const { Header, Content } = Layout;
const { Title } = Typography;

const styles = {
  header: { backgroundColor: '#fff', textAlign: 'center' },
  content: { padding: '0 150px' },
  card: { 
    margin: '5em 0', 
    backgroundColor: '#fff', 
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)', 
    borderRadius: '15px' 
  },
  title: {
    textAlign: 'center',
    padding: '1em',
    marginTop: '1em',
    marginBottom: '1em',
    color: '#000000',
    fontWeight: 'bold'
  }
};

const Home = () => {
  return (
    <Layout>
      <Header style={styles.header}>
        <Title level={1} style={styles.title}>
          {/* <Jumbotron text={["Latest Products", "New Arrivals", "Best Sellers"]} /> */}
        </Title>
      </Header>

      <Content style={styles.content}>
        <Card bordered={false} style={styles.card}>
          <Title level={2} style={styles.title}>New Arrivals</Title>
          <NewArrivals />
        </Card>

        <Card bordered={false} style={styles.card}>
          <Title level={2} style={styles.title}>Best Sellers</Title>
          <BestSellers />
        </Card>

        {/* <Card bordered={false} style={styles.card}>
          <Title level={2} style={styles.title}>Categories</Title>
          <CategoryList />
        </Card>

        <Card bordered={false} style={styles.card}>
          <Title level={2} style={styles.title}>Sub Categories</Title>
          <SubList />
        </Card> */}
      </Content>
    </Layout>
  );
};

export default Home;
