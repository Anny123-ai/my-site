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
        title: "第2课：变量与数据类型",
        content: `
            <h4>变量</h4>
            <p>变量是存储数据的容器。在 Python 中，不需要声明变量类型。</p>
            
            <h4>基本数据类型</h4>
            <ul>
                <li><strong>整数 (int)</strong>：如 1, 100, -5</li>
                <li><strong>浮点数 (float)</strong>：如 3.14, 2.0, -0.5</li>
                <li><strong>字符串 (str)</strong>：如 "Hello", 'Python'</li>
                <li><strong>布尔值 (bool)</strong>：True 或 False</li>
            </ul>
            
            <h4>示例代码</h4>
            <pre><code>name = "张三"
age = 25
height = 1.75
is_student = True

print(name)
print(age)
print(height)
print(is_student)</code></pre>
        `
    },
    {
        title: "第3课：运算符与表达式",
        content: `
            <h4>算术运算符</h4>
            <ul>
                <li><code>+</code> 加法</li>
                <li><code>-</code> 减法</li>
                <li><code>*</code> 乘法</li>
                <li><code>/</code> 除法</li>
                <li><code>%</code> 取余数</li>
                <li><code>**</code> 幂运算</li>
            </ul>
            
            <h4>比较运算符</h4>
            <ul>
                <li><code>==</code> 等于</li>
                <li><code>!=</code> 不等于</li>
                <li><code>&gt;</code> 大于</li>
                <li><code>&lt;</code> 小于</li>
            </ul>
            
            <h4>示例代码</h4>
            <pre><code>a = 10
b = 3

print(a + b)
print(a - b)
print(a * b)
print(a / b)
print(a % b)
print(a ** b)</code></pre>
        `
    },
    {
        title: "第4课：条件语句",
        content: `
            <h4>if 语句</h4>
            <p>根据条件执行不同的代码块。</p>
            
            <h4>语法结构</h4>
            <pre><code>if 条件:
    # 条件为真时执行
elif 另一个条件:
    # 另一个条件为真时执行
else:
    # 所有条件都为假时执行</code></pre>
            
            <h4>示例代码</h4>
            <pre><code>age = 18

if age < 18:
    print("未成年")
elif age >= 18 and age < 60:
    print("成年")
else:
    print("老年")</code></pre>
        `
    },
    {
        title: "第5课：循环语句",
        content: `
            <h4>for 循环</h4>
            <p>用于遍历序列（如列表、字符串等）。</p>
            
            <h4>while 循环</h4>
            <p>在条件为真时重复执行代码块。</p>
            
            <h4>示例代码</h4>
            <pre><code># for 循环
for i in range(5):
    print(i)

# while 循环
count = 0
while count < 5:
    print(count)
    count += 1

# 遍历字符串
for char in "Python":
    print(char)</code></pre>
        `
    },
    {
        title: "第6课：函数",
        content: `
            <h4>什么是函数？</h4>
            <p>函数是组织好的、可重复使用的、用来实现特定功能的代码块。</p>
            
            <h4>定义函数</h4>
            <pre><code>def 函数名(参数):
    # 函数体
    return 返回值</code></pre>
            
            <h4>示例代码</h4>
            <pre><code>def greet(name):
    return f"你好，{name}！"

def add(a, b):
    return a + b

print(greet("张三"))
print(add(3, 5))

# 默认参数
def power(x, n=2):
    return x ** n

print(power(3))
print(power(3, 3))</code></pre>
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
