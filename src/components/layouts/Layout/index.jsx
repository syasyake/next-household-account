import Header from '../Header';

export default function Layout({ children }) {
  return (
    <>
      <Header>
        <main className="bg-base-200">{children}</main>
      </Header>
    </>
  );
}