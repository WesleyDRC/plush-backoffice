import Container from "./layout/Container";
import Routes from "./routes";
import { AuthProvider } from "./contexts/auth";
import { UserProvider } from "./contexts/user";

function App() {
  return (
    <AuthProvider>
      <UserProvider>
        <Container>
          <Routes />
        </Container>
      </UserProvider>
    </AuthProvider>
  );
}

export default App;
