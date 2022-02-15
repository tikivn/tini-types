


/// <reference path="../types/index.d.ts"/>
// / <reference lib="dom"/>


declare var console: any
type Methods = {
  noBug(): void;
  onClick(): void;
  onTap(): void;
  hello: string;
};
type Props = {
  defaultPropsString: string,
  defaultPropsMethod(): void;
}
type Data = {
  test: string,
  num: number
}

Component
  // <Data, Props, Methods>
  (
    {
      onInit() {
        this.data.num;
        this.data.num;
        this.props.defaultPropsString;
        this.setData({ test: 'nana' })
        this.setData({ test: 'nana', notDefinedKey: "lalala" })
        this.setData(d => ({ test: 'nana', num: d.num }), data => {
          console.log({ 'updated': data })
        })

        this.props.defaultPropsMethod();
        this.onTap();
        this.onClick();
        this.onClick("hell");
        this.noBug
        this.hello
        this.data.num;
        this.data
      },
      didMount() {
        // this.
      },
      props: {
        defaultPropsString: "omg",
        defaultPropsMethod: () => {

        },
        test() {

        }
      },
      data: {
        test: "hello",
        num: 5,
      },
      methods: {
        noBug() {
          this.onClick();
          this.hello;
          this.data.num;
          this.props.defaultPropsMethod
        },
        hello: "string here",
        onClick(eventName: string): string {
          this.hello;
          this.noBug()
          this.onTap;
          return eventName;
        },
        onTap() {
          this.data.num;
          this.onClick("hell");
        },
      },
    });


Page
  (<tinitypes.Page.Options<
    {
      pageName: string;
    }, {
      userMethod(test: string): string
    }
  >>{
      data: { pageName: 'string' },
      userMethod(test: string): string {
        return test;
      },
      async onLoad() {
        await 5;

        this.userMethod

      }
    })


Page<{ name: string }, { userMethod(): void }>({
  data: { name: 'string here' },
  userMethod() { },
  onLoad() {
    this.userMethod()
  }
})





type AppOptionalInterface = {
  globalData: { name: string },
  userMethod(name: string): void,
  var1: number
}
App<AppOptionalInterface>({
  globalData: {
    name: "lalala"
  },
  var1: 55,
  /**
   * 
   * @param {string} name 
   */
  userMethod(name) {
    if (name)
      if (this.globalData.name.charCodeAt(0) === "l".charCodeAt(0)) {
        // this.setData({name})
      }
  },
  onLaunch({ referrerInfo }) {
    if (referrerInfo.appId === 'hihi') {
      //
    }
    this.userMethod('funny');
    this.var1;
    // this.setData({name:'se'})

    this.userMethod
  },
  onUnhandledRejection:function({promise,reason}){
     this.globalData.name;
      console.log({promise,reason})
  }
})

getApp<AppOptionalInterface>()