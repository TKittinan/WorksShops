import { Box, Badge, Card, Container,  Flex,  Grid,  Heading,  Progress,  Separator,  Text } from '@radix-ui/themes'
import { FiCheck, FiTrendingUp, FiGitBranch } from 'react-icons/fi'
import { IoHardwareChipOutline } from 'react-icons/io5'

export default function Home() {
  const skills = [
    { name: 'React', value: 95, color: 'blue', level: 'Expert' },
    { name: 'TypeScript', value: 80, color: 'indigo', level: 'Intermediate' },
    { name: 'Radix UI', value: 75, color: 'purple', level: 'Intermediate' },
    { name: 'Tailwind CSS', value: 90, color: 'teal', level: 'Expert' },
  ]

  return (
    <Container size="3" className="mx-auto max-w-5xl px-4 py-7">
      {/* HERO */}
      <Box mb="5">
        <Heading size="8" mb="2">Welcome</Heading>
        <Text>
          ทำงานสาย <b>IoT</b> (ESP32/Sensor/Relay) และเว็บสาย <b>หุ้น/วิเคราะห์หุ้น</b> —
          โฟกัสโค้ดอ่านง่ายและ UX ที่ใช้งานได้จริง
        </Text>

        <Flex gap="2" mt="3" wrap="wrap">
          <Badge size="2" color="blue" variant="soft"><IoHardwareChipOutline /> IoT</Badge>
          <Badge size="2" color="indigo" variant="soft"><FiTrendingUp /> Stock Analytics</Badge>
          <Badge size="2" color="green" variant="soft"><FiGitBranch /> Clean Code</Badge>
        </Flex>
      </Box>

      <Grid columns={{ initial: '1', md: '2' }} gap="4">
        <Card size="3">
          <Heading size="5" mb="3">About me</Heading>
          <Text as="p" mb="3">
            สนใจการต่อยอดอุปกรณ์ <b>ESP32</b> ให้คุยกันผ่าน REST/MQTT
            และทำเว็บสำหรับ <b>Portfolio/Stock Analysis</b> พร้อมแดชบอร์ดข้อมูลที่อ่านสบายตา
          </Text>
          <Separator my="2" />
          <ul className="m-0 list-none p-0 space-y-2">
            {[
              'ออกแบบโครงสร้างให้ดูแลง่ายในระยะยาว',
              'ชอบทดสอบจริงก่อนสรุปวิธีใช้งาน',
            ].map((t) => (
              <li key={t} className="flex items-center gap-2 text-[15px]">
                <FiCheck /> {t}
              </li>
            ))}
          </ul>
        </Card>

        <Card size="3">
          <Heading size="5" mb="3">ตอนนี้กำลังโฟกัส</Heading>
          <Flex direction="column" gap="3">
            <Flex align="center" gap="3">
              <IoHardwareChipOutline size={18} />
              <Text>ออกแบบบอร์ด <b>ESP32 + MCP23017</b> คุมรีเลย์หลายช่อง</Text>
            </Flex>
            <Flex align="center" gap="3">
              <FiTrendingUp size={18} />
              <Text>ทำ <b>Stock Dashboard</b> สำหรับติดตามพอร์ต/แนวโน้ม</Text>
            </Flex>
            <Flex align="center" gap="3">
              <FiGitBranch size={18} />
              <Text>จัดระเบียบโค้ดให้ <b>อ่านง่าย ทดแทนได้</b></Text>
            </Flex>
          </Flex>
        </Card>
      </Grid>

      <Card size="3" mt="4">
        <Heading size="5" mb="3">เทคโนโลยี & ระดับความถนัด</Heading>
        <Flex direction="column" gap="3">
          {skills.map((s) => (
            <Box key={s.name}>
              <Flex justify="between" mb="1">
                <Text weight="medium">{s.name}</Text>
                <Text color="gray">{s.level}</Text>
              </Flex>
              <Progress value={s.value}/>
            </Box>
          ))}
        </Flex>
      </Card>

      <Card size="3" mt="4">
        <Heading size="5" mb="3">ผลงานเด่นล่าสุด</Heading>
        <Grid columns={{ initial: '1', md: '2' }} gap="3">
          <Card size="2" variant="classic">
            <Heading size="4" mb="1">Smart Water Vending</Heading>
            <Text color="gray">
              ตู้น้ำอัตโนมัติ: ESP32 + MCP23017 + Relay 16CH, สั่งงานผ่าน Server/QR
            </Text>
            <Flex gap="2" mt="2" wrap="wrap">
              <Badge color="blue">ESP32</Badge>
              <Badge color="green">MCP23017</Badge>
              <Badge color="cyan">Relay</Badge>
            </Flex>
          </Card>

          <Card size="2" variant="classic">
            <Heading size="4" mb="1">Stock Analyzer</Heading>
            <Text color="gray">
              Dashboard วิเคราะห์แนวโน้ม/สถิติการลงทุน โฟกัสการเล่าเรื่องด้วยข้อมูล
            </Text>
            <Flex gap="2" mt="2" wrap="wrap">
              <Badge color="indigo">Analytics</Badge>
              <Badge color="orange">API</Badge>
              <Badge color="teal">Charts</Badge>
            </Flex>
          </Card>
        </Grid>
      </Card>
    </Container>
  )
}
