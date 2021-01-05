import H1 from "../components/typography/H1/H1";
import H2 from "../components/typography/H2/H2";
import H3 from "../components/typography/H3/H3";
import H4 from "../components/typography/H4/H4";
import H5 from "../components/typography/H5/H5";
import H6 from "../components/typography/H6/H6";
import Text from "../components/typography/Text/Text";
import Badge from "../components/ui/Badge/Badge";
import Button from "../components/ui/Button/Button";
import Card from "../components/ui/Card/Card";
import ImageIcon from "../components/ui/ImageIcon/ImageIcon";
import TextArea from "../components/ui/TextArea/TextArea";
import TextInput from "../components/ui/TextInput/TextInput";

export default function IndexPage() {
  return (
    <body className="bg-black h-screen">
      <div className="flex flex-wrap p-4">
        <div className="flex flex-col space-y-4 mx-4">
          <div>
            <Button onClick={() => console.log("test")} >This is a Test</Button>
          </div>
          <div>
            <Button color="secondary" onClick={() => console.log("test")} >This is a Test</Button>
          </div>
          <div>
            <Button color="tertiary" onClick={() => console.log("test")} >This is a Test</Button>
          </div>
          <div>
            <Button variant="outline" color="secondary" onClick={() => console.log("test")} >This is a Test</Button>
          </div>
        </div>
        <div className="flex flex-col space-y-4 px-4">
          <TextInput placeholder="Test" />
          <TextArea />
          <div className="flex space-x-4">
            <Badge>
              Test
            </Badge>
            <Badge color="secondary">
              Test
            </Badge>
            <Badge color="tertiary">
              Test
            </Badge>
          </div>
        </div>
        <div className="bg-clip-text bg-gradient-to-tr from-primary-700 via-secondary to-tertiary-300">
          <H1 color="transparent" size="9xl" className="font-bold">Test</H1>
          <H2 color="transparent" size="8xl" className="font-bold">Test</H2>
          <H3 color="transparent" size="7xl" className="font-bold">Test</H3>
          <H4 color="transparent" size="6xl" className="font-bold">Test</H4>
          <H5 color="transparent" size="5xl" className="font-bold">Test</H5>
          <H6 color="transparent" size="4xl" className="font-bold">Test</H6>
        </div>
        <div className="bg-clip-text bg-gradient-to-tr from-primary-700 via-secondary to-tertiary-300">
          <H1 color="white" size="9xl" className="font-bold">Test</H1>
          <H2 color="white" size="8xl" className="font-bold">Test</H2>
          <H3 color="white" size="7xl" className="font-bold">Test</H3>
          <H4 color="white" size="6xl" className="font-bold">Test</H4>
          <H5 color="white" size="5xl" className="font-bold">Test</H5>
          <H6 color="white" size="4xl" className="font-bold">Test</H6>
        </div>
        <div className="w-1/3 p-4">
          <Text color="gray-200">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam fugit hic ut. Aliquid, delectus? Ipsam harum odit perferendis aliquam necessitatibus?</Text>
        </div>

      </div>
      <div className="flex">
        <div className="max-w-3xl grid grid-cols-3 gap-4 bg-gray-900 p-12 rounded-xl m-4">
          <Card padding="4" color="gray-100">
            <Text >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam fugit hic ut. Aliquid, delectus? Ipsam harum odit perferendis aliquam necessitatibus?</Text>
          </Card>
          <Card padding="4" color="gray-100" >
            <Text >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam fugit hic ut. Aliquid, delectus? Ipsam harum odit perferendis aliquam necessitatibus?</Text>
          </Card>
          <Card padding="4" color="gray-100">
            <Text >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam fugit hic ut. Aliquid, delectus? Ipsam harum odit perferendis aliquam necessitatibus?</Text>
          </Card>
        </div>
        <div className="flex space-x-6 p-4">
          <ImageIcon size="64" />
          <ImageIcon size="128" />
          <ImageIcon size="256" />
        </div>
      </div>
      <div className="flex">
        <div className="max-w-sm p-4">
          <Card color="gray-200">
            <div className="flex flex-col space-y-4">
              <div className="flex space-x-4">
                <ImageIcon />
                <div>
                  <H5 className="font-bold">Test Name</H5>
                  <H6>Test Title</H6>
                </div>
              </div>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium saepe asperiores amet, omnis quod aliquam! Magni quasi nisi dolor. Aperiam.
              </Text>
            </div>
          </Card>
        </div>
        <div className="max-w-sm p-4">
          <Card>
            <div className="flex flex-col space-y-4">
              <div className="flex space-x-4">
                <ImageIcon />
                <div>
                  <H5 className="font-bold" color="gray-100">Test Name</H5>
                  <H6 color="gray-300">Test Title</H6>
                </div>
              </div>
              <Text color="gray-400">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium saepe asperiores amet, omnis quod aliquam! Magni quasi nisi dolor. Aperiam.
              </Text>
            </div>
          </Card>
        </div>
        <div className="max-w-2xl p-4">
          <Card>
            <div className="flex items-center space-x-4">
              <ImageIcon size={256} />
              <div className="flex flex-col space-y-4 self-start">
                <div>
                  <H4 className="font-bold" color="gray-100">Test Name</H4>
                  <H5 color="gray-300">Test Title</H5>
                </div>
                <Text color="gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium saepe asperiores amet, omnis quod aliquam! Magni quasi nisi dolor. Aperiam.
                </Text>
              </div>
            </div>
          </Card>
        </div>
      </div>


    </body>
  )
}
