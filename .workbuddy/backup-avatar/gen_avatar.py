from PIL import Image, ImageDraw

SRC = '/home/aris_qwq/.workbuddy/clipboard-images/clipboard-2026-11-13T15-04-34-848Z-20574477.jpg'
IMG_DIR = '/home/aris_qwq/Documents/ArisBlog/static/img'

src = Image.open(SRC).convert('RGB')
W, H = src.size
print('source', W, H)

# 头像取景：框住头部，稍微放大，脸居中
CROP = (40, 60, 840, 860)  # 800x800
head = src.crop(CROP)

# ---- 方形版（favicon / PWA / 需要方的场景） ----
square = src.resize((512, 512), Image.LANCZOS)
square.save(f'{IMG_DIR}/logo.png', optimize=True)

# ---- 圆形版（页面上圆形容器用的头像） ----
SS = 4  # 超采样倍数
size = 512
big = head.resize((size * SS, size * SS), Image.LANCZOS).convert('RGBA')
mask = Image.new('L', (size * SS, size * SS), 0)
ImageDraw.Draw(mask).ellipse((0, 0, size * SS - 1, size * SS - 1), fill=255)
big.putalpha(mask)
avatar = big.resize((size, size), Image.LANCZOS)
avatar.save(f'{IMG_DIR}/avatar.png', optimize=True)

# ---- navbar logo：100x100 圆形透明 webp ----
nav = avatar.resize((100, 100), Image.LANCZOS)
nav.save(f'{IMG_DIR}/logo.webp', 'WEBP', quality=92, method=6)

# ---- favicon.ico ----
square.save(f'{IMG_DIR}/favicon.ico', sizes=[(16, 16), (32, 32), (48, 48), (64, 64)])

# ---- PWA icons ----
square.resize((128, 128), Image.LANCZOS).save(f'{IMG_DIR}/icons/icon-128.png', optimize=True)
square.resize((192, 192), Image.LANCZOS).save(f'{IMG_DIR}/icons/icon-192.png', optimize=True)

# 预览图：方形 + 圆形并排，模拟深浅背景
prev = Image.new('RGB', (760, 400), (255, 255, 255))
dark = Image.new('RGB', (380, 400), (30, 33, 39))
prev.paste(dark, (380, 0))
prev.paste(square.resize((160, 160), Image.LANCZOS), (110, 40))
prev.paste(square.resize((56, 56), Image.LANCZOS), (20, 230))
prev.paste(square.resize((32, 32), Image.LANCZOS), (100, 240))
prev.paste(square.resize((16, 16), Image.LANCZOS), (160, 248))
a160 = avatar.resize((160, 160), Image.LANCZOS)
a56 = avatar.resize((56, 56), Image.LANCZOS)
a32 = avatar.resize((32, 32), Image.LANCZOS)
a16 = avatar.resize((16, 16), Image.LANCZOS)
# 白底与深底各贴一次，检查边缘
prev.paste(a160, (110, 40 + 180), a160)
prev.paste(a160, (490, 40), a160)
prev.paste(a56, (20, 300), a56)
prev.paste(a32, (100, 312), a32)
prev.paste(a16, (160, 320), a16)
prev.paste(a56, (400, 270), a56)
prev.paste(a32, (480, 282), a32)
prev.paste(a16, (540, 290), a16)
prev.save('/home/aris_qwq/Documents/ArisBlog/.workbuddy/backup-avatar/preview.png')
print('done')
