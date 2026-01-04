# PowerShell script to download images

$urls = @(
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
    "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=2070&q=80",
    "https://www.unite.ai/wp-content/uploads/2023/09/Heisenbergforlife_Center_the_scene_in_zoomed_scope_around_a_hum_7f069632-eda5-4edd-858b-cb44fec82929.png",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=2070&q=80",
    "https://aitoolselection.com/wp-content/uploads/2024/03/best-ai-chatbot.png",
    "https://airobohub.com/wp-content/uploads/2024/08/bot8.jpeg",
    "https://blog.auditoria.ai/hubfs/HighTech%2011.png#keepProtocol",
    "https://static.vecteezy.com/system/resources/previews/036/184/700/non_2x/rpa-robotic-process-automation-concept-computer-robotic-process-automatisation-vector.jpg",
    "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1581548133861-ad7a282a1d62?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
)

$filenames = @(
    "unsplash-1522071820081-009f0129c71c.jpg",
    "unsplash-1497366216548-37526070297c.jpg",
    "unsplash-1521737604893-d14cc237f11d.jpg",
    "unsplash-1551434678-e076c223a692.jpg",
    "unsplash-1555949963-aa79dcee981c.jpg",
    "unsplash-1506905925346-21bda4d32df4.jpg",
    "unsplash-1552664730-d307ca884978.jpg",
    "unsplash-1581291518857-4e27b48ff24e.jpg",
    "unsplash-1504384308090-c894fdcc538d.jpg",
    "unsplash-1558494949-ef010cbdcc538d.jpg",
    "unsplash-1526379095098-d400fd0bf935.jpg",
    "unsplash-1555949963-aa79dcee981c.jpg",
    "unsplash-1677442136019-21780ecad995.jpg",
    "unsplash-1551434678-e076c223a692.jpg",
    "unsplash-1518770660439-4636190af475.jpg",
    "unsplash-1517430816045-df4b7de11d1d.jpg",
    "unsplash-1517245386807-bb43f82c33c4.jpg",
    "unsplash-1574717024653-61fd2cf4d44d.jpg",
    "Heisenbergforlife_Center_the_scene_in_zoomed_scope_around_a_hum_7f069632-eda5-4edd-858b-cb44fec82929.png",
    "unsplash-1498050108023-c5249f4df085.jpg",
    "best-ai-chatbot.png",
    "bot8.jpeg",
    "HighTech 11.png",
    "rpa-robotic-process-automation-concept-computer-robotic-process-automatisation-vector.jpg",
    "unsplash-1456324504439-367cee3b3c32.jpg",
    "unsplash-1555255707-c07966088b7b.jpg",
    "unsplash-1577563908411-5077b6dc7624.jpg",
    "unsplash-1509228468518-180dd4864904.jpg",
    "unsplash-1518709268805-4e9042af2176.jpg",
    "unsplash-1551288049-bebda4e38f71.jpg",
    "unsplash-1544383835-bda2bc66a55d.jpg",
    "unsplash-1542831371-29b0f74f9713.jpg",
    "unsplash-1581548133861-ad7a282a1d62.jpg"
)

for ($i = 0; $i -lt $urls.Length; $i++) {
    $url = $urls[$i]
    $filename = $filenames[$i]
    $outPath = "public/images/$filename"
    Invoke-WebRequest -Uri $url -OutFile $outPath
    Write-Host "Downloaded $filename"
}