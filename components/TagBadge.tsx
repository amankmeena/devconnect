// components/TagBadge.tsx
"use client";

import { SiCodecrafters } from "react-icons/si";
import { useEffect, useState } from "react";

type Props = {
    tag: string;
};

const generateIconUrls = (tag: string): string[] => {
    const base = "https://cdn.simpleicons.org/";
    const lower = tag.toLowerCase().trim();

    const cleaned = lower
        .replace(/\.(js|ts|jsx|tsx|txt|json)$/i, "") // remove file suffixes
        .replace(/\.io$/i, "io"); // special case for .io

    const variants = [
        cleaned.replace(/\./g, "dot").replace(/\s+/g, ""),
        cleaned.replace(/\./g, "").replace(/\s+/g, ""),
        cleaned.replace(/\s+/g, "-"),
        cleaned.replace(/\s+/g, ""),
        lower.replace(/\./g, "dot").replace(/\s+/g, ""),
    ];

    const unique = [...new Set(variants)];

    return unique.map((v) => `${base}${v}/7b61ff`);
};

export const TagBadge = ({ tag }: Props) => {
    const [iconUrl, setIconUrl] = useState<string | null>(null);

    useEffect(() => {
        const urls = generateIconUrls(tag);

        (async () => {
            for (const url of urls) {
                try {
                    const res = await fetch(url, { method: "HEAD" });
                    if (res.ok) {
                        setIconUrl(url);
                        break;
                    }
                } catch (e) {
                    continue;
                }
            }
        })();
    }, [tag]);

    return (
        // text-accent text-2xl
        <div className="flex flex-col items-center gap-2 text-sm px-2 py-1 tech-icon">
            {iconUrl ? (
                <img
                    src={iconUrl}
                    alt={`${tag} icon`}
                    className="w-10 h-10 project-tag-icon"
                    loading="lazy"
                />
            )
            // color problem here
                : <SiCodecrafters className="w-10 h-10 text-accent" />}
            <span className="capitalize text-muted text-base text-center tech-label">{tag}</span>
        </div>
    );
};