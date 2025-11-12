import { Avatar, Badge, Card, Container, Flex, Grid, Heading, Separator, Text, Link } from '@radix-ui/themes'
import { InstagramLogoIcon, GitHubLogoIcon } from '@radix-ui/react-icons'

export default function Profile() {
  return (
    <Container size="3" className="mx-auto max-w-5xl px-4 py-7">
      <Card size="3" mb="4">
        <Flex align="center" gap="4">
          <Avatar size="7" radius="full" fallback="KTN" color="blue" />
          <div>
            <Heading size="7" mb="1">Kittinan Lertthamphiriya</Heading>
            <Text>Computer Engineer</Text>
          </div>
        </Flex>
      </Card>

      <Grid columns={{ initial: '1', md: '2' }} gap="4">
        {/* Projects Section */}
        <Card size="3">
          <Heading size="5" mb="3">My Project</Heading>
          <Separator my="2" />

          <Flex direction="column" gap="4">
            <Card size="2" variant="classic">
              <Heading size="4" mb="1">Smart Water Vending Machine</Heading>
              <Text>
                ระบบตู้น้ำอัตโนมัติควบคุมด้วย <b>ESP32</b> และ <b>MCP23017</b> ใช้
                <b> Relay 16CH</b> เชื่อมต่อ <b>Server</b> สำหรับสั่งงานผ่านอินเทอร์เน็ต
                รองรับ <b>QR Unlock</b> และแสดงสถานะผ่าน <b>LED</b>
              </Text>
              <Flex gap="2" mt="2" wrap="wrap">
                <Badge color="blue">ESP32</Badge>
                <Badge color="green">MCP23017</Badge>
                <Badge color="cyan">Relay</Badge>
                <Badge color="indigo">IoT</Badge>
              </Flex>
            </Card>

            <Card size="2" variant="classic">
              <Heading size="4" mb="1">BaiTong TicketMajor</Heading>
              <Text>
                เว็บจำหน่ายตั๋วคอนเสิร์ตด้วย <b>React + TypeScript</b> เชื่อม
                <b> Firebase Auth</b> มี <b>Cart</b>, <b>Order</b> และ
                <b> QR Code Ticket</b>
              </Text>
              <Flex gap="2" mt="2" wrap="wrap">
                <Badge color="blue">React</Badge>
                <Badge color="indigo">Firebase</Badge>
                <Badge color="violet">Tailwind</Badge>
                <Badge color="gray">TypeScript</Badge>
              </Flex>
            </Card>

            <Card size="2" variant="classic">
              <Heading size="4" mb="1">Stock Analyzer Dashboard</Heading>
              <Text>
                แดชบอร์ดวิเคราะห์หุ้น แสดงแนวโน้มราคา/Volume และสถิติการลงทุน
                ดึงข้อมูลจาก API และสรุปผลเพื่อการตัดสินใจ
              </Text>
              <Flex gap="2" mt="2" wrap="wrap">
                <Badge color="orange">API</Badge>
                <Badge color="teal">Charts</Badge>
                <Badge color="blue">React</Badge>
                <Badge color="indigo">Finance</Badge>
              </Flex>
            </Card>
          </Flex>
        </Card>

        <Card size="3">
          <Heading size="5" mb="2">Education</Heading>
          <Text weight="medium"><b>มหาวิทยาลัยธุรกิจบัณฑิตย์ คณะวิศวกรรมศาสตร์</b></Text>
          <Text><b> Computer Engineer</b></Text>
        </Card>
      </Grid>

      <Card size="3" mt="4">
        <Heading size="5" mb="2">Contact</Heading>
        <Separator my="2" />
        <Flex direction="column" gap="3">
          {/* Instagram */}
          <Flex align="center" gap="2">
            <InstagramLogoIcon color="crimson" width="20" height="20" />
            <Link
              href="https://www.instagram.com/tee.xlex/"
              target="_blank"
              underline="always"
            >
              <Text>https://www.instagram.com/tee.xlex/</Text>
            </Link>
          </Flex>

          <Flex align="center" gap="2">
            <GitHubLogoIcon color="black" width="20" height="20" />
            <Link
              href="https://github.com/TKittinan"
              target="_blank"
              underline="always"
            >
              <Text>https://github.com/TKittinan</Text>
            </Link>
          </Flex>
        </Flex>
      </Card>
    </Container>
  )
}
