type ProfileAvatarProps = {
    avatarSrc: string;
    name: string;
};

function ProfileAvatar({avatarSrc, name}: ProfileAvatarProps) {
    return (
        <div>
            <img
                src={avatarSrc}
                alt={name}
                className="w-40 h-40 rounded-full object-cover border-4 border-indigo-500/50 shadow-lg shadow-indigo-500/20 mb-8"
            />
            {/*
                w-40/h-40: 幅/高さ10rem
                rounded-full: 円形
                object-cover: 画像をトリミングして覆う
                border-4: 枠線4px
                border-indigo-500/50: 枠線色 indigo-500 50%不透明
                shadow-lg: 大きめ影
                shadow-indigo-500/20: 影色 indigo-500 20%不透明
                mb-8: 下マージン2rem
            */}
        </div>
    );
}

export default ProfileAvatar;
