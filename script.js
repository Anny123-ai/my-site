// 代码运行器组件
class CodeRunner {
    constructor() {
        this.runners = new Map();
        this.init();
    }

    init() {
        // 为所有代码块添加运行功能
        document.querySelectorAll('pre code').forEach((codeBlock, index) => {
            const pre = codeBlock.parentElement;
            if (pre.dataset.language === 'python' || codeBlock.textContent.includes('python')) {
                this.createCodeRunner(pre, index);
            }
        });
    }

    createCodeRunner(pre, index) {
        const code = pre.querySelector('code').textContent;
        const runnerId = `code-runner-${index}`;

        // 创建运行器容器
        const runnerContainer = document.createElement('div');
        runnerContainer.className = 'code-runner';
        runnerContainer.id = runnerId;

        // 创建控制栏
        const controlBar = document.createElement('div');
        controlBar.className = 'code-runner-controls';
        controlBar.innerHTML = `
            <div class="control-left">
                <span class="language">Python</span>
                <button class="run-btn">运行</button>
            </div>
            <div class="control-right">
                <button class="collapse-btn">收起</button>
            </div>
        `;

        // 创建输出区域
        const outputContainer = document.createElement('div');
        outputContainer.className = 'code-runner-output';
        outputContainer.innerHTML = '<div class="output-content">点击运行按钮执行代码</div>';

        // 组装运行器
        runnerContainer.appendChild(controlBar);
        runnerContainer.appendChild(outputContainer);

        // 插入到代码块下方
        pre.parentNode.insertBefore(runnerContainer, pre.nextSibling);

        // 保存运行器实例
        this.runners.set(runnerId, {
            container: runnerContainer,
            code,
            outputContainer
        });

        // 绑定事件
        this.bindEvents(runnerId);
    }

    bindEvents(runnerId) {
        const runner = this.runners.get(runnerId);
        if (!runner) return;

        // 运行按钮
        const runBtn = runner.container.querySelector('.run-btn');
        runBtn.addEventListener('click', () => this.runCode(runnerId));

        // 收起按钮
        const collapseBtn = runner.container.querySelector('.collapse-btn');
        collapseBtn.addEventListener('click', () => this.toggleCollapse(runnerId));
    }

    async runCode(runnerId) {
        const runner = this.runners.get(runnerId);
        if (!runner) return;

        const outputContent = runner.outputContainer.querySelector('.output-content');
        outputContent.innerHTML = '<div class="loading">运行中...</div>';

        try {
            // 使用 Pyodide 运行 Python 代码
            if (!window.pyodide) {
                outputContent.innerHTML = '<div class="error">Pyodide 加载中...</div>';
                await this.loadPyodide();
            }

            // 捕获标准输出
            let output = '';
            window.pyodide.setStdout({ write: (text) => output += text });
            window.pyodide.setStderr({ write: (text) => output += text });

            // 运行代码
            await window.pyodide.runPythonAsync(runner.code);

            // 显示输出
            outputContent.innerHTML = output ? 
                `<pre class="output-text">${this.escapeHtml(output)}</pre>` : 
                '<div class="success">代码执行成功，无输出</div>';
        } catch (error) {
            outputContent.innerHTML = `<div class="error">错误: ${this.escapeHtml(error.message)}</div>`;
        }
    }

    toggleCollapse(runnerId) {
        const runner = this.runners.get(runnerId);
        if (!runner) return;

        const outputContainer = runner.outputContainer;
        const collapseBtn = runner.container.querySelector('.collapse-btn');

        if (outputContainer.classList.contains('collapsed')) {
            outputContainer.classList.remove('collapsed');
            collapseBtn.textContent = '收起';
        } else {
            outputContainer.classList.add('collapsed');
            collapseBtn.textContent = '展开';
        }
    }

    async loadPyodide() {
        // 加载 Pyodide
        window.pyodide = await loadPyodide({
            indexURL: "https://cdn.jsdelivr.net/pyodide/v0.25.1/full/"
        });
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}

// 页面加载完成后初始化
window.addEventListener('DOMContentLoaded', () => {
    // 加载 Pyodide
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/pyodide/v0.25.1/full/pyodide.js';
    script.onload = () => {
        new CodeRunner();
    };
    document.head.appendChild(script);
});
