import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

function App() {
  return (
    <div className="p-10 bg-gradient-to-r from-maroon-800 to-orange-400 min-h-screen flex flex-col items-center justify-center">
      <Card className="p-6 w-96 shadow-xl bg-white/90">
        <CardHeader>
          <h2 className="text-xl font-bold text-maroon-800">Welcome to Scholalink</h2>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <Input placeholder="Enter your email..." />
          <Button className="bg-maroon-700 hover:bg-orange-500 text-white">
            Get Started
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
