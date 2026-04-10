const lessons = [
    {
        title: "第1课：Python 介绍与安装",
        content: `
            <h4>什么是 Python？</h4>
            <p>Python 是一种高级、解释型、通用的编程语言。它的设计哲学强调代码的可读性，使用显著的缩进。</p>
            
            <h4>Python 的特点</h4>
            <ul>
                <li>简单易学</li>
                <li>免费开源</li>
                <li>跨平台</li>
                <li>丰富的库</li>
            </ul>
            
            <h4>安装 Python</h4>
            <p>访问 <a href="https://www.python.org/downloads/" target="_blank">python.org</a> 下载最新版本的 Python。</p>
            
            <h4>验证安装</h4>
            <p>打开终端或命令提示符，输入：</p>
            <pre><code>python --version</code></pre>
            <p>如果显示 Python 版本号，说明安装成功！</p>
        `
    },
    {
        title: "第2课：Python 基础语法",
        content: `
            <h4>变量与数据类型</h4>
            <ul>
                <li><strong>整数 (int)</strong>：如 1, 100, -5</li>
                <li><strong>浮点数 (float)</strong>：如 3.14, 2.0, -0.5</li>
                <li><strong>字符串 (str)</strong>：如 "Hello", 'Python'</li>
                <li><strong>布尔值 (bool)</strong>：True 或 False</li>
                <li><strong>空值 (None)</strong>：表示没有值</li>
            </ul>
            
            <h4>运算符</h4>
            <ul>
                <li><strong>算术运算符</strong>：+, -, *, /, %, **</li>
                <li><strong>比较运算符</strong>：==, !=, >, <, >=, <=</li>
                <li><strong>逻辑运算符</strong>：and, or, not</li>
            </ul>
            
            <h4>条件语句</h4>
            <pre><code>if 条件:
    # 条件为真时执行
elif 另一个条件:
    # 另一个条件为真时执行
else:
    # 所有条件都为假时执行</code></pre>
            
            <h4>循环语句</h4>
            <pre><code># for 循环
for i in range(5):
    print(i)

# while 循环
count = 0
while count < 5:
    print(count)
    count += 1</code></pre>
        `
    },
    {
        title: "第3课：数据结构",
        content: `
            <h4>列表 (List)</h4>
            <p>列表是Python中最常用的数据结构，用于存储多个元素。</p>
            <pre><code># 创建列表
fruits = ["苹果", "香蕉", "橙子"]

# 访问元素
print(fruits[0])  # 苹果

# 添加元素
fruits.append("葡萄")

# 修改元素
fruits[1] = "梨"

# 删除元素
del fruits[2]</code></pre>
            
            <h4>元组 (Tuple)</h4>
            <p>元组是不可变的序列。</p>
            <pre><code># 创建元组
point = (10, 20)

# 访问元素
print(point[0])  # 10</code></pre>
            
            <h4>字典 (Dictionary)</h4>
            <p>字典用于存储键值对。</p>
            <pre><code># 创建字典
person = {"name": "张三", "age": 25, "city": "北京"}

# 访问值
print(person["name"])  # 张三

# 添加或修改
person["job"] = "工程师"

# 删除
del person["age"]</code></pre>
            
            <h4>集合 (Set)</h4>
            <p>集合用于存储唯一元素。</p>
            <pre><code># 创建集合
numbers = {1, 2, 3, 4, 5}

# 添加元素
numbers.add(6)

# 移除元素
numbers.remove(3)</code></pre>
        `
    },
    {
        title: "第4课：函数与模块",
        content: `
            <h4>函数定义与调用</h4>
            <pre><code>def greet(name):
    """函数文档字符串"""
    return f"你好，{name}！"

# 调用函数
print(greet("张三"))</code></pre>
            
            <h4>函数参数</h4>
            <pre><code># 默认参数
def power(x, n=2):
    return x ** n

# 关键字参数
print(power(n=3, x=2))  # 8

# 可变参数
def sum_numbers(*args):
    return sum(args)

# 关键字可变参数
def print_info(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")</code></pre>
            
            <h4>模块</h4>
            <pre><code># 导入模块
import math

# 使用模块中的函数
print(math.sqrt(16))  # 4.0

# 导入特定函数
from math import pi, sin

# 导入所有函数
from math import *</code></pre>
            
            <h4>创建模块</h4>
            <p>创建一个.py文件，然后在其他文件中导入它。</p>
            <pre><code># mymodule.py
def say_hello():
    print("Hello from my module!")

# 在其他文件中导入
import mymodule
mymodule.say_hello()</code></pre>
        `
    },
    {
        title: "第5课：面向对象编程",
        content: `
            <h4>类与对象</h4>
            <pre><code>class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def greet(self):
        return f"你好，我是{self.name}，今年{self.age}岁。"

# 创建对象
p1 = Person("张三", 25)
print(p1.greet())</code></pre>
            
            <h4>继承</h4>
            <pre><code>class Student(Person):
    def __init__(self, name, age, student_id):
        super().__init__(name, age)
        self.student_id = student_id
    
    def study(self):
        return f"{self.name}正在学习。"

# 创建学生对象
s1 = Student("李四", 20, "2026001")
print(s1.greet())
print(s1.study())</code></pre>
            
            <h4>封装</h4>
            <pre><code>class BankAccount:
    def __init__(self, balance):
        self.__balance = balance  # 私有属性
    
    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount
            return True
        return False
    
    def get_balance(self):
        return self.__balance</code></pre>
            
            <h4>多态</h4>
            <pre><code>class Animal:
    def speak(self):
        pass

class Dog(Animal):
    def speak(self):
        return "汪汪！"

class Cat(Animal):
    def speak(self):
        return "喵喵！"

def make_animal_speak(animal):
    print(animal.speak())

# 多态调用
dog = Dog()
cat = Cat()
make_animal_speak(dog)  # 汪汪！
make_animal_speak(cat)  # 喵喵！</code></pre>
        `
    },
    {
        title: "第6课：文件操作与异常处理",
        content: `
            <h4>文件操作</h4>
            <h5>读取文件</h5>
            <pre><code># 读取整个文件
with open("example.txt", "r", encoding="utf-8") as f:
    content = f.read()
    print(content)

# 逐行读取
with open("example.txt", "r", encoding="utf-8") as f:
    for line in f:
        print(line.strip())</code></pre>
            
            <h5>写入文件</h5>
            <pre><code># 写入文件（覆盖）
with open("example.txt", "w", encoding="utf-8") as f:
    f.write("Hello, Python!\n")
    f.write("This is a test.\n")

# 追加内容
with open("example.txt", "a", encoding="utf-8") as f:
    f.write("This is appended.\n")</code></pre>
            
            <h4>异常处理</h4>
            <pre><code>try:
    # 可能会引发异常的代码
    num = int(input("请输入一个数字："))
    result = 10 / num
    print(f"结果：{result}")
except ValueError:
    print("请输入有效的数字！")
except ZeroDivisionError:
    print("除数不能为零！")
except Exception as e:
    print(f"发生错误：{e}")
finally:
    print("程序执行完毕。")</code></pre>
            
            <h4>自定义异常</h4>
            <pre><code>class CustomError(Exception):
    def __init__(self, message):
        self.message = message
        super().__init__(self.message)

try:
    raise CustomError("这是一个自定义异常")
except CustomError as e:
    print(f"捕获到自定义异常：{e}")</code></pre>
        `
    }
];

let currentLessonIndex = -1;

function showLesson(index) {
    currentLessonIndex = index;
    const lesson = lessons[index];
    
    document.getElementById('lesson-title').textContent = lesson.title;
    document.getElementById('lesson-content').innerHTML = lesson.content;
    
    document.getElementById('lessons-section').classList.add('hidden');
    document.getElementById('lesson-detail-section').classList.remove('hidden');
    
    updateNavButtons();
    window.scrollTo(0, 0);
}

function showLessonsList() {
    currentLessonIndex = -1;
    document.getElementById('lesson-detail-section').classList.add('hidden');
    document.getElementById('lessons-section').classList.remove('hidden');
    window.scrollTo(0, 0);
}

function prevLesson() {
    if (currentLessonIndex > 0) {
        showLesson(currentLessonIndex - 1);
    }
}

function nextLesson() {
    if (currentLessonIndex < lessons.length - 1) {
        showLesson(currentLessonIndex + 1);
    }
}

function updateNavButtons() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    prevBtn.style.visibility = currentLessonIndex > 0 ? 'visible' : 'hidden';
    nextBtn.style.visibility = currentLessonIndex < lessons.length - 1 ? 'visible' : 'hidden';
}
